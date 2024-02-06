import { useState } from 'react'
import SettingButton from './SettingButton'
import SettingModal from './SettingModal'

function SettingModalWrapper() {
  const [modalVisible, setModalVisible] = useState(false)

  function showModal() {
    setModalVisible(true)
  }

  function hideModal() {
    setModalVisible(false)
  }

  return (
    <>
      <SettingButton handleClick={showModal} />
      <SettingModal visible={modalVisible} handleClose={hideModal} />
    </>
  )
}

export default SettingModalWrapper
