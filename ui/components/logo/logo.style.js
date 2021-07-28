import styled, { css } from 'styled-components';
import { Image } from 'antd';

export default styled(Image)`
${({
    height,
  }) => css`
.ant-image-img {
  max-height: ${height};
  width: auto
}
`}
`;
