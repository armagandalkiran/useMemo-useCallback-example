// import React from 'react';

// const Header = ({data}) => {
//     console.log("Header re-rendered");
//   return <div>Ben header
//       <br/><br/>
//       <code>{JSON.stringify(data)}</code>
//   </div>;
// };

// export default React.memo(Header);

import React from 'react';

const Header = ({data,increment}) => {
    console.log("Header re-rendered");
  return <div>Header - {data}
      <br/><br/>
      <button onClick={increment}>button</button>
  </div>;
};

export default React.memo(Header);