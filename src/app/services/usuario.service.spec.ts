import { TestBed } from '@angular/core/testing';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  //let constantSpy: jasmine.SpyObj<SharedConstantsService>;
  

  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
	httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(UsuarioService);
	 httpTestingController = TestBed.inject(HttpTestingController);
    /*constantSpy = TestBed.inject(
      SharedConstantsService
    ) as jasmine.SpyObj<SharedConstantsService>;*/
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should call get', () => {
	let planet = new Object();
    service.get(1);
  });
  
  it('should call create', () => {
	let planet = new Object();
    service.create(planet);
  });
  
  it('should call delete', () => {
	let planet = new Object();
    service.delete(1);
  });
  
  it('should call deleteAll', () => {
	service.deleteAll();
  });
  
   it('should call findByName', () => {
	service.findByName('anme');
  });
  
});
