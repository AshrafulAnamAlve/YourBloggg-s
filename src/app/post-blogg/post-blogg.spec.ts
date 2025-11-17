import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBlogg } from './post-blogg';

describe('PostBlogg', () => {
  let component: PostBlogg;
  let fixture: ComponentFixture<PostBlogg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBlogg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBlogg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
