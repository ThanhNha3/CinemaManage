export class UtilsService {
  public static formatCurrency(price: string): string {
    if (!isNaN(Number(price))) {
      const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(Number(price));
      return formattedPrice;
    }
  }
}
