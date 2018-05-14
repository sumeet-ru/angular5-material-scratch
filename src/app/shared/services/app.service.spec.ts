import { TestBed, inject } from '@angular/core/testing';

import { BlockChainServiceService } from './app-service.service';

describe('BlockChainServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockChainServiceService]
    });
  });

  it('should be created', inject([BlockChainServiceService], (service: BlockChainServiceService) => {
    expect(service).toBeTruthy();
  }));
});
