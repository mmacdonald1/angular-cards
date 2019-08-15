import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerComponent } from './card-container.component';

describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a button 'shuffle'`, () => {
    const fixture = TestBed.createComponent(CardContainerComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Shuffle');
  });

  it('should render 52 cards', () => {
    const fixture = TestBed.createComponent(CardContainerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.playingCard').length).toBe(52);
  });
  
  it('should call method shuffle on shuffle button press', async(() => {
      spyOn(component, 'shuffle')

      let button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();

      fixture.whenStable().then(() => {
        expect(component.shuffle).toHaveBeenCalled();
      });
   }));
});
