import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'for-test';
  rtl = true;
  markColor = "#06be4a"
  list = [
    {
      id: 1,

      title: 'Realizar la tarea asignada!',

      subTitle: '9:00pm',
    },

    {
      id: 2,

      title: 'Visitar al perro en casa de tu amiga',

      subTitle: '9:00pm',
    },

  ];

  action = (a) => {
    console.log(a);
  };
}
