import PropTypes from 'prop-types'
import { Modal } from '@Components/ui/modal'

function SettingModal({ visible, handleClose }) {
  return (
    <Modal visible={visible} size="medium" handleClose={handleClose}>
      <Modal.Header
        title="This is a modal"
        description="This is a modal description in the modal header lorem ipsum dolor sit amet"
        showClose
        handleClose={handleClose}
      />
      <Modal.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          volutpat dapibus scelerisque. Nam fermentum, eros vitae mollis
          faucibus, urna quam luctus risus, at scelerisque quam erat eu purus.
          Praesent accumsan pulvinar mattis. Nullam facilisis vulputate ligula
          id egestas. Aliquam commodo elit vel sem eleifend fermentum. Sed eu
          nisi pellentesque, vehicula tellus a, efficitur nisl. Vestibulum
          vehicula ut sapien tincidunt tincidunt. Donec ornare ut nunc id
          imperdiet. Aenean aliquet eu augue nec auctor.
        </p>
        <p>
          Vivamus eget dolor augue. Vivamus pharetra id tellus id ultricies.
          Suspendisse finibus faucibus libero, eget vehicula nunc. Integer
          gravida nibh justo, at viverra nulla commodo sodales. Donec semper
          dignissim pulvinar. Sed ut condimentum ante. Cras nec lacinia mauris,
          nec pretium nisl. Praesent orci ipsum, tempus non mauris id, placerat
          placerat odio. Vestibulum at tortor nec diam ultrices cursus at
          efficitur tortor.
        </p>
        <p>
          Mauris id porta velit, eu semper nunc. Sed turpis purus, ornare quis
          aliquet a, luctus nec lectus. Mauris id lorem eu neque sodales finibus
          lacinia et massa. Nulla egestas viverra ornare. Fusce feugiat ex a
          tempus sollicitudin. Mauris dapibus libero id urna cursus pulvinar.
          Phasellus nec magna sit amet ante rutrum tempor at quis ex. Phasellus
          condimentum sollicitudin orci eu imperdiet. Ut commodo commodo
          blandit.
        </p>
        <p>
          Vestibulum sed faucibus turpis. Morbi dignissim quam sit amet orci
          pellentesque porta. Quisque varius elementum risus eu vestibulum. Cras
          non lacus vel arcu congue elementum faucibus et enim. Duis non laoreet
          nulla. Nunc commodo mattis augue, at blandit turpis molestie ut. Proin
          consequat feugiat arcu, sodales posuere justo condimentum id. Nulla
          imperdiet nisl tortor, id rutrum ex elementum in. Vivamus accumsan
          facilisis urna vitae sollicitudin.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-md btn-primary ml-auto mr-0"
          style={{ display: 'block' }}
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  )
}

SettingModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SettingModal
