import React, { useState } from 'react';
import './PersonalCenter.css'; 

interface UserData {
  id: string;
  username: string;
  displayName: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  bio?: string;
  joinDate: string;
}

const PersonalCenter: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: '007',
    username: 'user-tu007',
    displayName: '撒比',
    email: '123456789@qq.com',
    phone: '1234567890',
    avatarUrl: './img/6.jpg',
    bio: '吃饭，睡觉，打豆豆',
    joinDate: '2025-05-17'
  });

  const [editMode, setEditMode] = useState(false);
  const [tempData, setTempData] = useState<UserData>({ ...userData });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData({ ...tempData });
    setEditMode(false);
    
    alert('个人信息已保存！');
  };

  const handleCancel = () => {
    setTempData({ ...userData });
    setEditMode(false);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setTempData(prev => ({ ...prev, avatarUrl: event.target!.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="personal-center-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>个人中心</h2>
          {!editMode && (
            <button 
              className="edit-button"
              onClick={() => setEditMode(true)}
            >
              编辑资料
            </button>
          )}
        </div>

        <div className="profile-content">
          <div className="avatar-section">
            <div className="avatar-wrapper">
              <img 
                src={editMode ? (tempData.avatarUrl || '/default-avatar.png') : (userData.avatarUrl || '/default-avatar.png')} 
                alt="用户头像"
                className="user-avatar"
              />
              {editMode && (
                <div className="avatar-upload">
                  <label htmlFor="avatar-upload" className="upload-label">
                    更换头像
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    style={{ display: 'none' }}
                  />
                </div>
              )}
            </div>
          </div>

          {editMode ? (
            <div className="edit-form">
              <div className="form-group">
                <label htmlFor="displayName">昵称</label>
                <input
                  type="text"
                  id="displayName"
                  name="displayName"
                  value={tempData.displayName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">电子邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={tempData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">手机号码</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={tempData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">个人简介</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={tempData.bio}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <div className="form-actions">
                <button className="cancel-button" onClick={handleCancel}>
                  取消
                </button>
                <button className="save-button" onClick={handleSave}>
                  保存更改
                </button>
              </div>
            </div>
          ) : (
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">用户名</span>
                <span className="info-value">{userData.username}</span>
              </div>
              <div className="info-item">
                <span className="info-label">昵称</span>
                <span className="info-value">{userData.displayName}</span>
              </div>
              <div className="info-item">
                <span className="info-label">电子邮箱</span>
                <span className="info-value">{userData.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">手机号码</span>
                <span className="info-value">{userData.phone || '未设置'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">个人简介</span>
                <p className="info-value bio">{userData.bio || '这个人很懒，什么都没留下~'}</p>
              </div>
              <div className="info-item">
                <span className="info-label">注册日期</span>
                <span className="info-value">{userData.joinDate}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalCenter;