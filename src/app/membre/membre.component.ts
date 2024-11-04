import { Component } from '@angular/core';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css'],
})
export class MembreComponent {
  dataSource: any[] = [
    {
      id: '1',
      cin: '123',
      name: 'hafedh',
      type: 'teacher',
      cv: 'lien',
      createdDate: '12/12/2022',
    },
    {
      id: '2',
      cin: '123',
      name: 'hafedh',
      type: 'teacher',
      cv: 'lien',
      createdDate: '12/12/2022',
    },
    {
      id: '3',
      cin: '123',
      name: 'hafedh',
      type: 'teacher',
      cv: 'lien',
      createdDate: '12/12/2022',
    },
  ];
}
