import React, { Component } from 'react'

class ActiveUser extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="thumbnail-caption">
              <table className="user-info table table-responsive">
                <caption>Данные сотрудника</caption>
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
        </div>
      </div>
    )
  }
}

export default ActiveUser
