import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCodeBranch,
  faFilter,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <FontAwesomeIcon icon={faCodeBranch} size={20} color="white" />
        </View>
        <View style={styles.headingContainer}>
          <Text style={{fontSize: 23, fontWeight: 'bold', color: '#40454f'}}>
            Quick News
          </Text>
        </View>
        <View style={styles.notificationContainer}>
          <FontAwesomeIcon icon={faBell} size={20} color="#ff7e78" />
        </View>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search News" />
          <FontAwesomeIcon icon={faMagnifyingGlass} size={18} color="#40454f" />
        </View>
        <View style={styles.notificationContainer}>
          <FontAwesomeIcon icon={faFilter} size={20} color="#ff7e78" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  headerContainer: {
    width: '100%',
    height: '60@vs',
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '15@ms',
    columnGap: 15,
  },

  logoContainer: {
    backgroundColor: '#ff7e78',
    padding: 15,
    borderRadius: 40,
  },

  headingContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    paddingHorizontal: '20@ms',
  },

  notificationContainer: {
    backgroundColor: '#faebef',
    borderRadius: 8,
    padding: 15,
  },

  searchContainer: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '20@ms',
    borderRadius: 20,
  },
});
