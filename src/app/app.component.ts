import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `{{ pageTitle }}`
})
export class AppComponent {
  pageTitle: string = "My Title";
}