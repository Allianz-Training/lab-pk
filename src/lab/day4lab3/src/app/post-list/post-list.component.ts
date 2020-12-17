import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any[]
  form: FormGroup

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    this.form = fb.group({
      title: '',
      userId: '',
      body: ''
    })
  }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost() {
    this.httpClient
    .get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response as any[]
    })
  }

  submitForm(e) {
    e.preventDefault()
    this.httpClient
      .post('https://jsonplaceholder.typicode.com/posts', this.form.value )
      .subscribe(response => {
        this.form.reset()
        alert(JSON.stringify(response))
      })
  }

}
