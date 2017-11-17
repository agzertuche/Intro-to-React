import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Confirm } from 'semantic-ui-react';

class DeleteButton extends React.Component {
  state = {
    deleteConfirmOpen: false,
  }

  openConfirm = () => {
    this.setState({
      deleteConfirmOpen: true
    });
  }

  onOkConfirm = () => {
    this.props.deleteObject(this.props.index);
  }

  onCancelConfirm = () => {
    this.setState({
      deleteConfirmOpen: false
    });
  }

  render() {
    const { objectName } = this.props;
    const { deleteConfirmOpen } = this.state;

    return (
      <Button icon onClick={() => this.openConfirm()}>
        <Icon name='trash' /> 
        {deleteConfirmOpen && 
          <Confirm 
            open={deleteConfirmOpen}
            content={`Are you sure you want to delete '${objectName}'?`}
            cancelButton='No'
            confirmButton='Yes, delete it!'
            onCancel={() => this.onCancelConfirm()}
            onConfirm={() => this.onOkConfirm()}
          />
        }
      </Button>
    );
  }

  static propTypes = {
    index: PropTypes.string.isRequired,
    objectName: PropTypes.string.isRequired,
    deleteObject: PropTypes.func.isRequired,
  }
}

export default DeleteButton;