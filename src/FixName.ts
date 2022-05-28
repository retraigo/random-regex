export function fixName(name: string): string {
    const fixedName = `${
      name.toUpperCase()
        .replace(/\.([A-Z])\./gi, ". $1.")
        .replace(/\.([A-Z])/gi, ". $1")
        .replace(/\.\./gi, ".")
        .replace(/\s([A-Z])\s/g, " $1. ")
        .replace(/\s([A-Z])$/gi, " $1.")
        .replace(/^([A-Z])\s/gi, "$1. ")
        .replace(/([A-Z][A-Z])\.\s([A-Z])/gi, "$1 $2")
        .replace(/^Dr\s/gi, "Dr. ")
        .replace(/^Mr\s/gi, "Mr. ")
        .replace(/^Mrs\s/gi, "Mrs. ")
        .replace(/^Ms\s/gi, "Ms. ")
    }`;
    return (
      fixedName.split(" ").map((s) =>
        s.charAt(0).toUpperCase() +
        s.slice(1).toLowerCase()
      ).join(" ")
    );
  }
  