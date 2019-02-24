CREATE TABLE users(
  username_hash character(64),
  password_hash character(64),
  session_id character(36)
);

INSERT INTO users(username_hash, password_hash) VALUES
('4084b412a7bfd7bbca50812b0df4470e0413ad3335ac4af36b91c0d3d8172ff6', '4084b412a7bfd7bbca50812b0df4470e0413ad3335ac4af36b91c0d3d8172ff6');
