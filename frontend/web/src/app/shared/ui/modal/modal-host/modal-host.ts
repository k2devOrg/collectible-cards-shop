import {Component, inject} from '@angular/core';
import {ModalService} from '../../../../core/modal/modal-service';
import {AddToCartModalComponent} from '../add-to-cart-modal/add-to-cart-modal';

@Component({
  selector: 'app-modal-host',
  standalone: true,
  imports: [AddToCartModalComponent],
  templateUrl: './modal-host.html',
  styleUrls: ['./modal-host.css'],
})
export class ModalHost {
    modalService: ModalService = inject(ModalService);
    state = this.modalService.state
}
