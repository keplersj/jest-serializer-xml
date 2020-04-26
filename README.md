# jest-serializer-xml

Serializer for Jest to better visualize XML Documents in Snapshots.

## Installation

```shell
npm install --save-dev jest-serializer-xml
```

## Usage

Configure Jest to use the serializer in `jest.config.js`:

```js
module.exports = {
  snapshotSerializers: ["jest-serializer-xml"],
};
```

or `package.json`:

```json
{
  "jest": {
    "snapshotSerializers": ["jest-serializer-react-helmet"]
  }
}
```
