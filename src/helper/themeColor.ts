export class PickThemeColor {
  colorScheme: string[];
  currentColor: string | undefined;
  constructor(currentColor: string) {
    this.colorScheme = [
      "primary.light",
      "primary.main",
      "primary.dark",
      "error.light",
      "error.main",
      "error.dark",
      "success.light",
      "success.main",
      "success.dark",
      "info.light",
      "info.main",
      "info.dark",
      "warning.light",
      "warning.main",
      "warning.dark",
    ];
    this.currentColor = currentColor;
  }
  getColor() {
    return this.colorScheme.find((item) => item === this.currentColor);
  }
}
