CREATE DATABASE IF NOT EXISTS meis5_dev
  DEFAULT CHARSET utf8
  COLLATE utf8_general_ci;


CREATE TABLE IF NOT EXISTS tb_user (
  id VARCHAR(64),
  username VARCHAR(64),
  password VARBINARY(64),
  nickname VARBINARY(64)
)
