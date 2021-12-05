export type AccountState = {
  isLoading: boolean;
  account: {
    address: string
    balance: string
  }|null;
  openSeaLinks: string[]
  isAppDisabled: boolean
  chainId: string
};

const initialState: AccountState = {
  account: null,
  isLoading: false,
  openSeaLinks: [],
  isAppDisabled: true,
  chainId: ""
};

export enum AccountActionTypes {
  SET_ACCOUNT = "SET_ACCOUNT",
  SET_ISLOADING = "SET_ISLOADING",
  SET_ACCOUNT_FAILURE = "SET_ACCOUNT_FAILURE",
  SET_DISABLE_APP = "SET_DISABLE_APP",
  SET_OPENSEA_LINK = "SET_OPENSEA_LINK",
  SET_CHAIN = "SET_CHAIN"
}

export type AccountAction =
  | { type: AccountActionTypes.SET_ACCOUNT; payload: {address:string, balance:string} | null }
  | { type: AccountActionTypes.SET_ISLOADING; payload: boolean }
  | { type: AccountActionTypes.SET_ACCOUNT_FAILURE }
  | { type: AccountActionTypes.SET_DISABLE_APP; payload: boolean }
  | { type: AccountActionTypes.SET_OPENSEA_LINK; payload: string }
  | { type: AccountActionTypes.SET_CHAIN; payload: string }

const reducer = (state: AccountState, action: AccountAction): AccountState => {
  switch (action.type) {
    case AccountActionTypes.SET_ACCOUNT:
      return {
        ...state,
        account: action.payload 
      };
    case AccountActionTypes.SET_ACCOUNT_FAILURE:
      return {
        ...state,
        account:null,
      };
    case AccountActionTypes.SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AccountActionTypes.SET_DISABLE_APP:
      return {
        ...state,
        isAppDisabled: action.payload,
      };
    case AccountActionTypes.SET_CHAIN:
      return {
        ...state,
        chainId: action.payload,
      };
    case AccountActionTypes.SET_OPENSEA_LINK:
      return {
        ...state,
        openSeaLinks: [...state.openSeaLinks, action.payload]
      };
    default:
      return state;
  }
}

export { initialState, reducer };