export const getWeightOnPlanet = (earthWeight: string | number, gravityRatio: number): string => {
  const weight = Number(earthWeight);
  
  if (!weight || weight <= 0 || isNaN(weight)) {
    return "";
  }

  return (weight * gravityRatio).toFixed(1);
};