/**
 * Very basic clicker service that is exported as a singleton and stores
 * total clicks in memory with one function to add to total clicks and one to get total clicks
 */
class ClickerService {
  private totalClicks = 0;

  /**
   * Add the given number of clicks to the total click count and return the total click count
   */
  addClicks(clickCount: number): number {
    this.totalClicks = this.totalClicks + clickCount;

    return this.totalClicks;
  }

  /**
   * Get the total click count
   */
  getTotalClicks() {
    return this.totalClicks;
  }

  /**
   * Reset total clicks back to 0
   */
  resetTotalClicks() {
    this.totalClicks = 0;
    return this.totalClicks;
  }
}

export const clickerService = new ClickerService();
