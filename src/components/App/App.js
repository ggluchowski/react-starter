import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
// import Creator from '../Creator/Creator';

// "react/prop-types": "off" - do pliku eslintrc do rules, aby wylaczyc missing props validation

class App extends React.Component {

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    // image: PropTypes.string,
  }
  // static deflautProps = {
  //   image: settings.deflautImage,
  // }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}


        {/* <div className={styles.component_new_list}>
          {this.state.lists.map(({ key, ...listProps }) => (
            <List key={key} {...listProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div> */}

      </main>

    );
  }
}

export default App;
