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
  
  //it('should call get allll', () => { // SPEC HAS NO EXPECTATIONS should call get allll
  it('should call get all', (done: DoneFn) => {
	// En general, al probar las funciones de devolución de llamada asíncrona, siempre es importante esperar los resultados de la prueba después de que se resuelvan las promesas.
	//	Puede utilizar el marco del banco de pruebas Angular tick()con fakeAsync()o simplemente puede recurrir a la forma general de Jasmine de probar los métodos asíncronos mediante el uso done()
	
	let planet = new Object();
	service.getAll(planet).subscribe(log => {
        expect(log).toEqual({});
        done();
      });
	  
	  const testReq = httpTestingController.expectOne('desafio-azurian/usuarios');
      expect(testReq.request.method).toBe('GET');
      testReq.flush({});
      httpTestingController.verify();
  });
  
  it('should call get', () => {
	let planet = new Object();
    service.get(1);
  });
  
  it('should call create', () => {
	let planet = new Object();
    service.create(planet);
  });
  
   it('should call update', () => {
	let planet = new Object();
    service.update(1, planet);
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
