"""empty message

Revision ID: 6d03ecd0346d
Revises: 132deb558f93
Create Date: 2021-05-11 17:44:34.833458

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d03ecd0346d'
down_revision = '132deb558f93'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('propiedad', sa.Column('precio', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('propiedad', 'precio')
    # ### end Alembic commands ###
