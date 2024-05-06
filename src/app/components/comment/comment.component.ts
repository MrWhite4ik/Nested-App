import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  isExpanded = false;
  isReplying = false;

  toggleReplying(){
    this.isReplying = !this.isReplying;
  }

  toggleExpanded(){
    this.isExpanded = !this.isExpanded;
  }
}
