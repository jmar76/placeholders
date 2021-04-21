"""empty message

Revision ID: c23627f71360
Revises: 7fd57ae62ed0
Create Date: 2021-04-20 18:37:23.122063

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c23627f71360'
down_revision = '7fd57ae62ed0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('amenidades_propiedad_id_fkey', 'amenidades', type_='foreignkey')
    op.drop_column('amenidades', 'propiedad_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('amenidades', sa.Column('propiedad_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('amenidades_propiedad_id_fkey', 'amenidades', 'propiedad', ['propiedad_id'], ['id'])
    # ### end Alembic commands ###
