/*
 * Global variables for handling experiment flow
 */


const DEBUG = true;
const TEST = false;
const SEED = false;

// experiment ID for sending data to OSF
const experimentIdOSF = 'ekvNxwCrXyJi';

// possible values for S and T in payoff matrix
s_values = [0, 3, 7, 10]
t_values = [5, 8, 12, 15]

// possible initials for player whose behavior is being predicted
initials = ['G.P.', 'D.T.', 'F.A.', 'E.B.']

// four possible player types
playerTypes = ['opt_nat', 'pess_nat', 'opt_inv', 'pess_inv']

// five possible color pairings
colorPairs = [['Red', 'Blue'], ['Red', 'Purple'], ['Blue', 'Purple'], ['Blue', 'Green'], ['Purple', 'Green']]