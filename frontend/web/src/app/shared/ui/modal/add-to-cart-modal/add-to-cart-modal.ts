import {AfterViewInit, Component, inject, signal} from '@angular/core';
import {ModalService} from '../../../../core/modal/modal-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-add-to-cart-modal',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './add-to-cart-modal.html',
})
export class AddToCartModalComponent implements AfterViewInit {
  protected modalService: ModalService = inject(ModalService);

  data = this.modalService.state().payload as {
    title: string,
    price: number;
    imgUrl: string;
    quantity: number;
  }

  entered = signal(false);

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.entered.set(true);
    });
  }
}
