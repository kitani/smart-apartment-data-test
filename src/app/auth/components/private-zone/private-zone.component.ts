import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../state-management/store.service';
import { authStateSelector } from '../../../state-management/selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-private-zone',
  templateUrl: './private-zone.component.html',
  styleUrls: ['./private-zone.component.scss']
})
export class PrivateZoneComponent implements OnInit {
  authState: Observable<any>;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.authState = this.store.state$.pipe(
      map(state => authStateSelector(state)),
    );
  }

}
