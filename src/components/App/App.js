import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';

import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
  }
  static deflautProps = {
    image: settings.deflautImage,
  }

  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            image: './public/images/todo.jpg'
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />

        <div className={styles.component_new_list}>
        {this.state.lists.map(({ key, ...listProps }) => (
            <List key={key} {...listProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>

      </main>
    )
  }
}

export default App;
