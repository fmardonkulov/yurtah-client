export class Element {
  constructor(element) {
    this.element = element;
  }

  element: any;

  private getElement(): any {
    return this.element === 'window' ? window : document.querySelector(this.element);
  }

  public resize(callback): void {
    this.getElement().onresize = callback;
  }

  public click(callback): void {
    this.getElement().onclick = callback;
  }

  public hover(callback): void {
    this.getElement().onmouseover = callback;
  }

  public scroll(callback): void {
    this.getElement().onscroll = callback;
  }
}
