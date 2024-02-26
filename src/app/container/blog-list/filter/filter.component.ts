import { Component, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisabledDirective } from '../../../disabled.directive';
import { GetTextDirective } from '../../../get-text.directive';

@Component({
  selector: 'app-filter',
  standalone: true,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  imports: [FormsModule, DisabledDirective, GetTextDirective]
})
// export class FilterComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{
export class FilterComponent {  
constructor() {
    console.log('Constructor called');
  }

  // ngOnInit() {
  //   console.log('ngOnInit called');
  // }

  // ngOnChanges() {
  //   console.log('ngOnChanges called');
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck called');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy called');
  // }


  like:number ;
  name:string = '';
  title:string = '';
  @ViewChild("text") text:ElementRef;
  @Output()
  nameEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()
  titleEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()
  likeEvent:EventEmitter<number> = new EventEmitter<number>();

  searchByName() {
    this.nameEvent.emit(this.name); 
  }
  searchByLikes() {
    this.likeEvent.emit(this.like); 
  }
  searchByTitle(event: HTMLInputElement) {
    console.log(this.text.nativeElement.value)
    this.titleEvent.emit(event.value); 
  }
}
