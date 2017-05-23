DROP DATABASE IF EXISTS meis5_dev;

CREATE DATABASE IF NOT EXISTS meis5_dev
  DEFAULT CHARSET utf8
  COLLATE utf8_general_ci;

USE meis5_dev;

CREATE TABLE IF NOT EXISTS tb_address (
  id              BIGINT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid            VARCHAR(64) UNIQUE,
  province        VARCHAR(64),
  city            VARCHAR(64)   NOT NULL,
  district        VARCHAR(64),
  street          VARCHAR(64),
  street_number   VARCHAR(64),
  building        VARCHAR(64),
  building_number VARCHAR(64),
  detail          VARCHAR(64),
  phone           VARCHAR(64),
  latitude        DOUBLE,
  longitude       DOUBLE,
  altitude        DOUBLE
);

CREATE TABLE IF NOT EXISTS tb_user (
  id                 BIGINT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid               VARCHAR(64) UNIQUE,
  username           VARCHAR(64) UNIQUE,
  password           VARBINARY(64),
  nickname           VARBINARY(64),
  emails             JSON,
  phone              JSON,
  qq                 VARCHAR(64) UNIQUE,
  wechat             VARCHAR(64) UNIQUE,
  google             VARCHAR(64) UNIQUE,
  facebook           VARCHAR(64) UNIQUE,
  twitter            VARCHAR(64) UNIQUE,
  linkin             VARCHAR(64) UNIQUE,
  github             VARCHAR(64) UNIQUE,
  created_date       DATETIME      NOT NULL             DEFAULT CURRENT_TIMESTAMP,
  last_updated_date  DATETIME ON UPDATE CURRENT_TIMESTAMP,
  last_visitied_date DATETIME,
  latitude           DOUBLE,
  longitude          DOUBLE,
  altitude           DOUBLE,
  linestring         LINESTRING,
  polygon            POLYGON,
  point              POINT
);

--                             User Shipping Address
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_user_shippingAddresses (
  id         BIGINT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid       VARCHAR(64) UNIQUE,
  user_id    BIGINT        NOT NULL,
  address_id BIGINT        NOT NULL
);

ALTER TABLE tb_user_shippingAddresses
  ADD FOREIGN KEY (user_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

ALTER TABLE tb_user_shippingAddresses
  ADD FOREIGN KEY (address_id) REFERENCES tb_address (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

--                            User Billing Address
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_user_billingAddresses (
  id         BIGINT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid       VARCHAR(64) UNIQUE,
  user_id    BIGINT        NOT NULL,
  address_id BIGINT        NOT NULL
);

ALTER TABLE tb_user_billingAddresses
  ADD FOREIGN KEY (user_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

ALTER TABLE tb_user_billingAddresses
  ADD FOREIGN KEY (address_id) REFERENCES tb_address (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

--                               User Friends
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_user_friends (
  id        BIGINT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid      VARCHAR(64) UNIQUE,
  user_id   BIGINT        NOT NULL,
  friend_id BIGINT        NOT NULL
);

ALTER TABLE tb_user_friends
  ADD FOREIGN KEY (user_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

ALTER TABLE tb_user_friends
  ADD FOREIGN KEY (friend_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

--                            User Followers
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_user_followers (
  id          BIGINT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid        VARCHAR(64) UNIQUE,
  user_id     BIGINT        NOT NULL,
  follower_id BIGINT        NOT NULL
);

ALTER TABLE tb_user_followers
  ADD FOREIGN KEY (user_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

ALTER TABLE tb_user_followers
  ADD FOREIGN KEY (follower_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

--                            User Following
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tb_user_following (
  id           BIGINT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT,
  uuid         VARCHAR(64) UNIQUE,
  user_id      BIGINT        NOT NULL,
  following_id BIGINT        NOT NULL
);

ALTER TABLE tb_user_following
  ADD FOREIGN KEY (user_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

ALTER TABLE tb_user_following
  ADD FOREIGN KEY (following_id) REFERENCES tb_user (id)
  ON UPDATE CASCADE
  ON DELETE RESTRICT;

--                            User Auto UUID
-- ---------------------------------------------------------------------------
DELIMITER //
CREATE TRIGGER `tg_user`
BEFORE INSERT ON `tb_user`
FOR EACH ROW
  BEGIN
    IF new.uuid IS NULL
    THEN
      SET new.uuid = uuid();
    END IF;
  END//
DELIMITER ;
