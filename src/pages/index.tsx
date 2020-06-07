// react libraries
import * as React from 'react';
import Icon from '@mdi/react';
import { mdiFilterVariant, mdiFileDocument } from '@mdi/js';
import InfiniteScroll from 'react-infinite-scroll-component';

// Components
import Filter from 'components/Filter';
import Record from 'components/Record';
import Spinner from 'components/Spinner';

// utilities
import getRequest from 'utilities/getRequest';

// Initaial state
import { initialState } from './fixtures';

// Styles
import './pages.scss';

export default () => {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    setState({
      ...state,
      isLoading: true
    });
    getRequest(`${process.env.REACT_APP_FILTER_API}`)
      .then((response: any) => {
        setState({
          ...state,
          isLoading: false,
          filters: [...response]
        });
      })
      .catch((error: any) => {
        console.log(error.message);
        setState({
          ...state,
          isLoading: false
        });
      });
  }, []);

  React.useEffect(() => {
    if (state.filter) {
      getMoreRecords();
    }
  }, [state.filterTrack]);

  const showRecords = (event: any) => {
    const id = event.currentTarget.attributes['attributes-id'].value;
    const filter = state.filters.find((item: any) => item.id == id);
    if (filter) {
      setState({
        ...state,
        filter,
        filterTrack: !state.filterTrack,
        isLoading: true
      });
    }
  };

  const getMoreRecords = () => {
    const body = {
      options: state.filter,
      limit: state.limit,
      offset: state.records.length
    };
    getRequest(`${process.env.REACT_APP_API_BASE_URL}records`, 'post', body)
      .then((response: any) => {
        setState({
          ...state,
          showRecords: true,
          hasMore: response.data.length > 0,
          isLoading: false,
          records: [...state.records, ...response.data]
        });
      })
      .catch((error: any) => {
        setState({
          ...state,
          isLoading: false
        });
      });
  };

  return (
    <>
      {state.isLoading ? (
        <div className="pages__spinner">
          <Spinner classes="pages__spinner__loader" />
        </div>
      ) : (
        <>
          {state.showRecords ? (
            <div className="pages__records">
              <div className="pages__records-icon">
                <Icon
                  path={mdiFileDocument}
                  title="filter"
                  size={1.2}
                  className=""
                />
                <span>Car Owners Record</span>
              </div>
              {state.records.length > 0 ? (
                <InfiniteScroll
                  dataLength={state.records.length}
                  next={() =>
                    setState({ ...state, filterTrack: !state.filterTrack })
                  }
                  hasMore={state.hasMore}
                  loader={
                    <div className="pages__load-more">
                      <Spinner classes="" />
                    </div>
                  }
                  endMessage={
                    <div className="pages__no-record">No More Records</div>
                  }
                >
                  {state.records.map((data: any, ind: number) => (
                    <Record record={data} key={ind} />
                  ))}
                </InfiniteScroll>
              ) : (
                <div className="pages__no-record">No Record available</div>
              )}
            </div>
          ) : (
            <>
              <div className="pages__filters">
                <div className="pages__filter-icon">
                  <Icon
                    path={mdiFilterVariant}
                    title="filter"
                    size={1.2}
                    className=""
                  />
                  <span>Filter</span>
                </div>
                {state.filters.length > 0 ? (
                  <>
                    {state.filters.map((data: any, ind: number) => (
                      <Filter filter={data} onClick={showRecords} key={ind} />
                    ))}
                  </>
                ) : (
                  <div className="pages__no-filter">No filter available</div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
