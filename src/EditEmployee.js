import React, { Component } from 'react'

class EditEmployee extends Component {
  state = {
    editMode: false
  }

  toggleMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    if (!this.props.selectedEmployeeData) return null

    const { name, phone, role, birthday, isArchive } = this.props.selectedEmployeeData
    const { rolesDictionary } = this.props
    const { editMode } = this.state

    return (
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Данные сотрудника</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="thumbnail-caption">
                <table className="user-info table table-hover">
                  <tbody>
                    <tr>
                      <td>ФИО:</td>
                      <td className="user-desc">
                        {editMode ? <input value={name} /> : name}
                      </td>
                    </tr>

                    <tr>
                      <td>Должность:</td>
                      <td className="user-desc">
                        {editMode
                          ? (
                            <select>
                              {Object.keys(rolesDictionary).map((role) => {
                                return <option key={role}>{rolesDictionary[role]}</option>
                              })}
                            </select>
                          )
                          : rolesDictionary[role]
                        }
                      </td>
                    </tr>

                    <tr>
                      <td>Телефон:</td>
                      <td className="user-desc">
                        {editMode ? <input value={phone} /> : phone}
                      </td>
                    </tr>

                    <tr>
                      <td>Дата рождения:</td>
                      <td className="user-desc">
                        {editMode ? <input value={birthday} /> : birthday}
                      </td>
                    </tr>

                    <tr>
                      <td>В архиве:</td>
                      <td className="user-desc">
                        {/*{isArchive ? 'Да' : 'Нет'}*/}
                        {editMode
                          ? (
                            <input type="checkbox" checked={isArchive} />
                          )
                          : (
                            <input type="checkbox" disabled="true" checked={isArchive} />
                          )
                          }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Закрыть
              </button>

            {editMode
              ? (
                <button
                  type="button" className="btn btn-primary"
                  onClick={this.toggleMode}
                >
                  Сохранить изменения
                </button>
              )
              : (
                <button
                  type="button" className="btn btn-primary"
                  onClick={this.toggleMode}
                >
                  Редактировать
                </button>
              )
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditEmployee
