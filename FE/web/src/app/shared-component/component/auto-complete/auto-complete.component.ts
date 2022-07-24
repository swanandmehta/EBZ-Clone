import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { AutoCompleteOption } from '../../interface/auto-complete-option';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit, OnDestroy {
  @Input('label') label: string = 'Please select option';
  @Input('placeholder') placeholder: string = 'Type here !';
  @Input('filteredOptions') filteredOptions: Observable<AutoCompleteOption[]>;
  @Input('limiter') limiter: number = 500;
  @Input('invalidInputMessage') invalidInputMessage: string = '';
  @Input('noMatchFoundMessage') noMatchFoundMessage: string = '';

  @Output('handleInputChange') handleChange: EventEmitter<string>;

  form: FormGroup;
  showNoMatchFoundMessage: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      control: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.handleChange = new EventEmitter();

    const filterSubscription: Subscription =
      this.form.controls.control.valueChanges
        .pipe(
          filter((value) => this.form.controls.control.valid),
          debounceTime(this.limiter)
        )
        .subscribe((value: string) => {
          this.handleChange.emit(value);
        });

    this.subscriptions.push(filterSubscription);

    this.filteredOptions = of([]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    const sub: Subscription = this.filteredOptions.subscribe(
      (list: AutoCompleteOption[]) => {
        this.showNoMatchFoundMessage = list.length == 0 && this.form.dirty;
      }
    );

    this.subscriptions.push(sub);
  }
}
