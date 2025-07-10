import { PIIMapType } from "../types";
import { PIIType } from "../constants/PIIRegExp";

export class PIIMapper {
  private PIIMap: PIIMapType = new Map();
  private PIICounterMap = new Map<PIIType, number>();

  isMapped(PII: string): boolean {
    return this.PIIMap.has(PII);
  }

  private incrementCounter(type: PIIType): number {
    const next = (this.PIICounterMap.get(type) || 0) + 1;
    this.PIICounterMap.set(type, next);

    return next;
  }

  private generateMaskedPII(type: PIIType, PII: string): string {
    const PIICount = this.incrementCounter(type);
    const maskedPII = `[${type}${PIICount}]`;
    this.PIIMap.set(PII, maskedPII);

    return maskedPII;
  }

  getMaskedPII(type: PIIType, PII: string): string {
    if (!this.isMapped(PII)) {
      return this.generateMaskedPII(type, PII);
    }

    return this.PIIMap.get(PII)!;
  }

  getPIIMap(): Map<string, string> {
    return this.PIIMap;
  }
}
