import {
  ADD_CONTACT_FAILURE,
  CHANGE_CONTACT_SUCCESS,
  CHANGE_SEARCH_STRING,
  DELETE_CONTACT,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT,
  // GET_CONTACT_SUCCESS,
  // GET_CONTACT_FAILURE,
  // GET_CONTACT_REQUEST,
  GET_PART_CONTACT_SUCCESS,
  GET_PART_CONTACT_FAILURE,
  GET_PART_CONTACT_REQUEST,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  CHANGE_CONTACT_REQUEST,
  CHANGE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  LOG_OUT,
  CREATE_MODEL_OPENED,
  EDIT_MODEL_OPENED,
  SORT_CONTACT,
  OPEN_DELETE_MODAL,
  CONTACTS_COUNT,
  CHANGE_SHOW_CONTACTS,
  CHANGE_MESSAGE,
  FILTER_MODAL_OPENED,
  FILTER_LEVEL_ADD,
  FILTER_LEVEL_REMOVE,
  FILTER_PROMOTER_ADD,
  FILTER_PROMOTER_REMOVE,
  FILTER_DECISION_ADD,
  FILTER_DECISION_REMOVE,
  COPY_FILTER,
  CHANGE_CHECKED_LEVEL,
  CHANGE_CHECKED_PROMOTER,
  CHANGE_CHECKED_DECISION,
  CLEAR_FILTER,
} from 'store/actionTypes';
import { sortBy } from 'lodash';

const initialState = {
  data: [
    // {
    //     id: 1, name: 'Paul', job: 'CEO', decision: 'Deside', promoter: 'Promoter', level: "High", relatOwner: 'Laura',
    //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //     id: 2, name: 'Maksim', job: 'CTO', decision: 'Deside', promoter: 'Strong Promoter', level: "Medium", relatOwner: 'John',
    //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //     id: 3, name: 'Andrey', job: 'CMO', decision: 'Agree', promoter: 'Detractor', level: "Emerging", relatOwner: 'Laura',
    //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //     id: 4, name: 'Vadim', job: 'Accountant', decision: 'Recommend', promoter: 'Neutral', level: "Medium", relatOwner: 'John',
    //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //     id: 5, name: 'Vladlen', job: 'CMO', decision: 'Recommend', promoter: 'Neutral', level: "Low", relatOwner: 'Laura',
    //     topics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
  ],
  searchString: '',
  editContactId: null,
  error: '',
  isRequestion: true,
  createModalOpened: false,
  editModalOpened: false,
  deleteModalOpened: null,
  message: '',
  contactsCount: null,
  levelOptions: [
    { value: 'Low', label: 'Low' },
    { value: 'Middle', label: 'Middle' },
    { value: 'High', label: 'High' },
  ],
  promoterOptions: [
    { value: 'Promoter', label: 'Promoter' },
    { value: 'Detractor', label: 'Detractor' },
  ],
  decisionOptions: [
    { value: 'Decision1', label: 'Decision1' },
    { value: 'Decision2', label: 'Decision2' },
    { value: 'Decision3', label: 'Decision3' },
  ],
  showContactsCount: 3,
  filterModalOpened: false,
  level: { High: false, Middle: false, Low: false },
  promoter: { Promoter: false, Detractor: false },
  decision: {
    Decision1: false,
    Decision2: false,
    Decision3: false,
  },
  levelCopy: [],
  promoterCopy: [],
  decisionCopy: [],
  filterLevel: [],
  filterPromoter: [],
  filterDecision: [],
  countOfFilter: 0,
};

function contactsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_SEARCH_STRING:
      return {
        ...state,
        searchString: payload,
        filteredContacts: state.searchString
          ? state.data.filter(item => item.name.includes(payload))
          : state.data,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        data: state.data.filter(item => item.id !== payload),
        editContactId: null,
      };
    case EDIT_CONTACT:
      return {
        ...state,
        editContactId: payload,
      };
    case CREATE_MODEL_OPENED:
      return {
        ...state,
        createModalOpened: payload,
      };
    case SORT_CONTACT:
      return {
        ...state,
        data: sortBy(state.data, [payload]),
      };
    case OPEN_DELETE_MODAL:
      return {
        ...state,
        deleteModalOpened: payload,
      };
    case EDIT_MODEL_OPENED:
      return {
        ...state,
        editModalOpened: payload,
      };
    // case GET_CONTACT_FAILURE:
    //   return {
    //     ...state,
    //     error: payload,
    //     isRequestion: false,
    //   };
    // case GET_CONTACT_REQUEST:
    //   return {
    //     ...state,
    //     isRequestion: true,
    //   };

    // case GET_CONTACT_SUCCESS:
    //   return {
    //     ...state,
    //     data: payload,
    //     isRequestion: false,
    //   };
    case GET_PART_CONTACT_FAILURE:
      return {
        ...state,
        error: payload,
        isRequestion: false,
      };
    case GET_PART_CONTACT_REQUEST:
      return {
        ...state,
        isRequestion: true,
      };

    case GET_PART_CONTACT_SUCCESS:
      return {
        ...state,
        data: payload,
        isRequestion: false,
      };
    case ADD_CONTACT_FAILURE:
      return {
        ...state,
        error: payload,
        isRequestion: false,
      };
    case ADD_CONTACT_REQUEST:
      return {
        ...state,
        isRequestion: true,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        data: payload,
        isRequestion: false,
        createModalOpened: false,
      };
    case CHANGE_CONTACT_SUCCESS:
      return {
        ...state,
        data: payload,
        isRequestion: false,
        editModalOpened: false,
      };
    case CHANGE_CONTACT_FAILURE:
      return {
        ...state,
        error: payload,
        isRequestion: false,
      };
    case CHANGE_CONTACT_REQUEST:
      return {
        ...state,
        isRequestion: true,
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        error: payload,
        isRequestion: false,
      };
    case DELETE_CONTACT_REQUEST:
      return {
        ...state,
        isRequestion: true,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        data: payload,
        editContactId: null,
        isRequestion: false,
        deleteModalOpened: null,
      };
    case CONTACTS_COUNT:
      return {
        ...state,
        contactsCount: payload,
      };
    case LOG_OUT:
      return {
        ...state,
      };
    case CHANGE_SHOW_CONTACTS:
      return {
        ...state,
        showContactsCount: payload,
      };
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    case FILTER_MODAL_OPENED:
      return {
        ...state,
        filterModalOpened: !state.filterModalOpened,
      };
    case FILTER_LEVEL_ADD:
      return {
        ...state,
        levelCopy: state.levelCopy.concat(payload),
      };
    case FILTER_LEVEL_REMOVE:
      return {
        ...state,
        levelCopy: state.levelCopy.filter(level => level !== payload),
      };
    case FILTER_PROMOTER_ADD:
      return {
        ...state,
        promoterCopy: state.promoterCopy.concat(payload),
      };
    case FILTER_PROMOTER_REMOVE:
      return {
        ...state,
        promoterCopy: state.promoterCopy.filter(promoter => promoter !== payload),
      };
    case FILTER_DECISION_ADD:
      return {
        ...state,
        decisionCopy: state.decisionCopy.concat(payload),
      };
    case FILTER_DECISION_REMOVE:
      return {
        ...state,
        decisionCopy: state.decisionCopy.filter(decision => decision !== payload),
      };
    case CHANGE_CHECKED_LEVEL:
      return {
        ...state,
        level: { ...state.level, [payload.name]: payload.check },
      };
    case CHANGE_CHECKED_PROMOTER:
      return {
        ...state,
        promoter: { ...state.promoter, [payload.name]: payload.check },
      };
    case CHANGE_CHECKED_DECISION:
      return {
        ...state,
        decision: { ...state.decision, [payload.name]: payload.check },
      };
    case COPY_FILTER:
      return {
        ...state,
        filterLevel: [...state.levelCopy],
        filterPromoter: [...state.promoterCopy],
        filterDecision: [...state.decisionCopy],
        countOfFilter: payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        level: { High: false, Middle: false, Low: false },
        promoter: { Promoter: false, Detractor: false },
        decision: {
          Decision1: false,
          Decision2: false,
          Decision3: false,
        },
        levelCopy: [],
        promoterCopy: [],
        decisionCopy: [],
        countOfFilter: 0,
      };
    default:
      return state;
  }
}

export default contactsReducer;
