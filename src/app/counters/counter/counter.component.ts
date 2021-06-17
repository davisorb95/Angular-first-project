import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    title: string = 'Contador';
    counter: number = 0;

    get maxLimitCounter(): boolean {
        return this.counter >= 20;
    }

    get minLimitCounter(): boolean {
        return this.counter <= 0;
    }

    increaseCounter(value: number): void {
        this.counter += value;
        this.showAlert();
    }

    showAlert(): void {
        this.maxLimitCounter && alert('El límite máximo del contador es 20');
        this.minLimitCounter && alert('El límite mínimo del contador es 0');
    }
}