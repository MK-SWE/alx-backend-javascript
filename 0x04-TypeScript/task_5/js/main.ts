interface MajorCredits {
  credits: number;
  _brand?: 'major';
}

interface MinorCredits {
  credits: number;
  _brand?: 'major';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'minor' };
}
