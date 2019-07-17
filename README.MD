# GITHUBER

React Native project that search users in GITHUB , list repositories and last 20 commits.


## Some of ES6+ features used in this project

* Template literals - Used to create URL to API's requests

    ```
    const user = await api.get(`/users/${userName}`);
    ```

* Const - Prevents accidentally re-assigning a constant and ensures immutability

    ```
    const userName = await AsyncStorage.getItem("@Gymhuber:userName");
    ```

* Destructuring - Allows to extract properties from an object

    ```
        const { userName } = this.state;
    ```

* Arrow Functions - Clean and concise syntax for writing function expressions

    ```
  back = () => {
    const { navigation } = this.props;

    navigation.navigate('Repositories');
  };
    ```

## Built with

* [React Native](https://facebook.github.io/react-native/) - A framework for building native apps using React
* [React Native Async Storage](https://github.com/react-native-community/async-storage) - Manages local state
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

