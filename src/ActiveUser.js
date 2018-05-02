import React, { Component } from 'react'

class ActiveUser extends Component {

  render() {
    return (
      <div className="modal fade" id="exampleModal" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Данные сотрудника</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="thumbnail-caption">
                <table className="user-info table table-hover">
                  <tbody>
                    <tr>
                      <td>ФИО:</td>
                      <td className="user-desc">
                        Илья Емельянов
                        <button className="btn btn-outline-primary btn-sm ml40">
                          <i className="fas fa-pencil-alt"></i> Редактировать
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Должность:</td>
                      <td className="user-desc">
                        Водитель
                        <button className="btn btn-outline-primary btn-sm ml40">
                          <i className="fas fa-pencil-alt"></i> Редактировать
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Телефон:</td>
                      <td className="user-desc">
                        +7 (883) 508-3269
                        <button className="btn btn-outline-primary btn-sm ml40">
                          <i className="fas fa-pencil-alt"></i> Редактировать
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Дата рождения:</td>
                      <td className="user-desc">
                        12.02.1982
                        <button className="btn btn-outline-primary btn-sm ml40">
                          <i className="fas fa-pencil-alt"></i> Редактировать
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>В архиве:</td>
                      <td className="user-desc">
                        Да
                        <button className="btn btn-outline-primary btn-sm ml40">
                          <i className="fas fa-pencil-alt"></i> Редактировать
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
              <button type="button" className="btn btn-primary">Сохранить изменения</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ActiveUser
