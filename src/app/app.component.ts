import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form : FormGroup;
  showModal : boolean;
  submitted : boolean;
  constructor( public fb: FormBuilder,private http: HttpClient) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      imageUp: [null]
    }) }
   imageDetails: object[];
   ngOnInit() {
      this.http.get("assets/js/data.json")
      .subscribe(imageData =>{
        let res = imageData;
        this.imageDetails = res['data'];
      });
        this.form = this.fb.group({
            title: ['', Validators.required],
            description: ['', [Validators.required]],
            imageUp: ['', [Validators.required]]
        });
        interface HTMLInputEvent extends Event {
          target: HTMLInputElement & EventTarget;
      }
    }

    show(){
      this.showModal = true;
    }
  
    uploadFile(event:any) {
      if (event.target.file && event.target.file[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          this.form.get('file').setValue(event.target.file[0]);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    get formValid() { return this.form.controls; }
    submitForm() {
      this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
      var formData: any = new FormData();
      formData.append("title", this.form.get('title').value);
      formData.append("description", this.form.get('description').value);
      formData.append("image", this.form.get('imageUp').value.replace("C:\\fakepath\\", "assets\/images\/"));
      this.http.post('/assets/api/test.php', formData,{responseType:'text'}).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
    }
}
