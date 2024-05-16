import { UserService } from './../services/user.service';
import { CommentService } from './../services/comment.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommentComponent } from '../components/comment/comment.component';
import { Comment } from '../interfaces/comment.interface';
import { CommentFormComponent } from '../components/comment-form/comment-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CommentComponent, CommentFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  commentService = inject(CommentService);
  comments = signal<Comment[]>([]);
  userService = inject(UserService);
  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments().subscribe((comments) => {
      this.comments.set(comments);
    });
  }

  createComment(formValues: { text: string }) {
    const { text } = formValues;
    const user = this.userService.getUserFromStorage();
    if (!user) {
      return;
    }
    this.commentService
      .createComment({
        text,
        userId: user._id,
      })
      .subscribe((createdComment) => {
        this.comments.set([createdComment, ...this.comments()]);
      });
  }
  commentTrackBy(_index: number, comment: Comment){
    return comment._id
  }
}
