import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CoursesService } from '../shared/services/courses.service';
import { DebugElement } from '@angular/core';

const coursesServicesStub = {
  all: () => {
    return {
      subscribe: () => {},
    };
  },
};

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let de: DebugElement;
  let coursesService: CoursesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      providers: [{ provide: CoursesService, useValue: coursesServicesStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    coursesService = de.injector.get(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call coursesService.delete on deleteCourse', () => {
    spyOn(coursesService, 'delete').and.callThrough();
    component.deleteCourse(1);
    expect(coursesService.delete).toHaveBeenCalledWith(1);
  });
});
