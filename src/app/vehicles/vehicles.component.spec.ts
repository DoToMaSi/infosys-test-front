import { TestBed } from '@angular/core/testing';
import { angularImports, declarations, materialImports, providers } from './vehicles.module';
import { RouterTestingModule } from '@angular/router/testing';
import { VehiclesComponent } from './vehicles.component';

describe('VehiclesComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ...angularImports,
      ...materialImports,
      RouterTestingModule
    ],
    declarations: [
      ...declarations
    ],
    providers: [
      ...providers
    ]
  }));

  it('should create the VehiclesComponent', () => {
    const fixture = TestBed.createComponent(VehiclesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
})
