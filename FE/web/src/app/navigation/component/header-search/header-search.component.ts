import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { AutoCompleteOption } from 'src/app/shared-component/interface/auto-complete-option';
import { StudentSearchService } from 'src/app/shared/service/student-search.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent implements OnInit {
  searchResultSubject: Subject<AutoCompleteOption[]> = new BehaviorSubject<
    AutoCompleteOption[]
  >([]);
  options: Observable<AutoCompleteOption[]>;

  constructor(private studentSearchService: StudentSearchService) {
    this.options = this.searchResultSubject.asObservable();
  }

  ngOnInit(): void {}

  search(searchKey: string): void {
    this.studentSearchService.search(searchKey).subscribe({
      next: (list: AutoCompleteOption[]) => {
        this.searchResultSubject.next(list);
      },
      error: () => {
        //TODO: Handle error
      },
    });
  }
}
