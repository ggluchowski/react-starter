import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import PropTypes from 'prop-types';
// import Creator from '../Creator/Creator';

// "react/prop-types": "off" - do pliku eslintrc do rules, aby wylaczyc missing props validation

class Home extends React.Component {

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
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
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

export default Home;
