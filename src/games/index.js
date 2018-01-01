import brainGames from './brain-games';
import brainEven from './brain-even';
import brainCalc from './brain-calc';
import brainGcd from './brain-gcd';

export const getDescription = game => game.description;
export const getGenerator = game => game.generate;
export const isGame = game => game.generate && typeof game.generate === 'function';

export {
  brainGames,
  brainEven,
  brainCalc,
  brainGcd,
};
